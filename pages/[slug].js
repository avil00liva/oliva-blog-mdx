import { MDXRemote } from "next-mdx-remote"
import { getFileBySlug, getFiles } from "../lib/mdx"
import LayoutBlog from "../src/components/LayoutBlog";
import Youtube from "../src/components/YouTube";
import Head from 'next/head'
import "../node_modules/highlight.js/styles/atom-one-dark.css"


export default function Post ({source, frontmatter}) {
    return (
        <LayoutBlog metadata={frontmatter}>
          <Head>
            <title>Oliva Personal Blog</title>
          </Head>
          <MDXRemote {...source} components={{Youtube}} />
        </LayoutBlog>
    )
}

export async function getStaticPaths() {
    const posts = await getFiles();
    const paths = posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    }));
  
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);
  
    return {
      props: {
        source,
        frontmatter: {
          slug: params.slug,
          ...frontmatter,
        },
      },
    };
  }
