import { HtmlBasePlugin } from "@11ty/eleventy";
import { deleteSync } from "del";

export default async function config(eleventyConfig) {
  deleteSync("dist/*");
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    pathPrefix: "/domain-maps",
  };
}
