import { useQuery } from "@tanstack/react-query";
import { useRepositories } from "@/hooks/repository";
import { create } from "@bufbuild/protobuf";
import { GetAllChannelsRequestSchema } from "@meline/schema/schema/request/channel_request_pb.js";

export const useJoinedChannels = () => {
  const { channelRepository } = useRepositories();

  return useQuery({
    queryKey: channelRepository.getJoinedChannels$$key(),
    queryFn: () =>
      channelRepository.getJoinedChannels(
        create(GetAllChannelsRequestSchema, {}),
      ),
  });
};
