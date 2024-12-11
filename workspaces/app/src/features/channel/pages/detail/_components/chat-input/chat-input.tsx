import { useCallback, useEffect, useRef, useState } from "react";
import { styles } from "./chat-input.css";
import { usePostMessage } from "../../_hooks/use-post-message";
import { Textarea } from "@/components/ui/textarea";

type ChatInputFormData = {
  message: string;
};

interface ChatInputProps {
  channelId: number;
}

export const ChatInput = ({ channelId }: ChatInputProps) => {
  const { mutate: postMessage, isPending } = usePostMessage({ channelId });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [formError, setFormError] = useState<string>("");

  const reset = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.value = "";
      textarea.style.height = "auto";
    }
    setFormError("");
  };

  const onSubmit = useCallback(
    async (data: ChatInputFormData) => {
      try {
        postMessage({ content: data.message });
        setTimeout(() => {
          reset();
        }, 0);
      } catch {
        setFormError("Failed to send message");
      }
    },
    [postMessage],
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (textarea) {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          onSubmit({ message: textarea.value });
          return;
        }

        setTimeout(() => {
          const borderHeight =
            textarea.getBoundingClientRect().height - textarea.clientHeight;
          textarea.style.height = `calc(${textarea.scrollHeight}px + ${borderHeight}px)`;
        }, 0);
      }
    };

    textarea?.addEventListener("keydown", handleKeyDown);

    return () => {
      textarea?.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmit]);

  return (
    <div className={styles.chatForm}>
      <Textarea
        id="chat-input"
        placeholder="Type a message..."
        rows={1}
        error={formError}
        ref={textareaRef}
        disabled={isPending}
      />
    </div>
  );
};
