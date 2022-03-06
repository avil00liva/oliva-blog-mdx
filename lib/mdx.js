import fs from "fs"
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";


const root = process.cwd()

export const getFiles = async () =>
  fs.readdirSync(path.join(root, "data","posts"));

export const getFileBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(path.join(root, "data", "posts",`${slug}.mdx`), "utf-8")

    const {data, content} = await matter(mdxSource)
    const source = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, {behavior: "wrap"}],
                rehypeHighlight,
            ]
        }
    })

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        }
    }
}

export const getAllFilesMetaData = () => {
    const files = fs.readdirSync(path.join(root, "data", "posts"))

    return files.reduce((allPosts, postSlug)=>{
        const mdxSource = fs.readFileSync(path.join(root, "data", "posts", postSlug), "utf-8")
        const {data} = matter(mdxSource)

        return [{...data, slug: postSlug.replace(".mdx", "")}, ...allPosts]
    }, [])
}