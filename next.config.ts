import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
  webpack(config) {
    // Customize CSS Modules class names for better readability
    const rules = config.module?.rules;
    if (rules) {
      rules.forEach((rule: any) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((oneOfRule: any) => {
            if (oneOfRule.use) {
              oneOfRule.use.forEach((loader: any) => {
                if (
                  loader.loader?.includes('css-loader') &&
                  loader.options?.modules
                ) {
                  loader.options.modules.getLocalIdent = undefined;
                  loader.options.modules.localIdentName = '[name]__[local]';
                }
              });
            }
          });
        }
      });
    }
    return config;
  },
};

export default nextConfig;
