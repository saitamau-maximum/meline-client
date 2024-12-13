import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRepositories } from "@/hooks/repository";
import { create } from "@bufbuild/protobuf";
import { CreateChannelRequestSchema } from "@meline/schema/schema/request/channel_request_pb.js";

interface UseCreateChannelsOptions {
  onCreated?: () => void;
  onFailed?: () => void;
}

interface MutationParam {
  name: string;
}

export const useCreateChannels = ({
  onCreated,
  onFailed,
}: UseCreateChannelsOptions) => {
  const client = useQueryClient();
  const { channelRepository } = useRepositories();

  return useMutation({
    mutationFn: async (param: MutationParam) => {
      return channelRepository.createChannel(
        create(CreateChannelRequestSchema, param),
      );
    },
    onSettled: () => {
      client.invalidateQueries({
        queryKey: channelRepository.getJoinedChannels$$key(),
      });
    },
    onSuccess: () => {
      onCreated?.();
    },
    onError: () => {
      onFailed?.();
    },
  });
};
