import { object, pipe, string, url, safeParse, InferOutput } from "valibot";

const envSchema = object({
  SERVER_BASE_URL: pipe(string(), url()),
  SERVER_BASE_WEBSOCKET_URL: pipe(string(), url()),
});

let _ENV: InferOutput<typeof envSchema>;

const initializeEnv = () => {
  const res = safeParse(envSchema, {
    SERVER_BASE_URL: import.meta.env.VITE_SERVER_BASE_URL,
    SERVER_BASE_WEBSOCKET_URL: import.meta.env.VITE_SERVER_BASE_WEBSOCKET_URL,
  });

  if (!res.success) {
    throw new Error(`[initializeEnv]: 環境変数が不正です`);
  }

  _ENV = res.output;
};

initializeEnv();

export const env = (key: keyof typeof _ENV) => {
  if (!_ENV) initializeEnv();
  return _ENV[key];
};
