import Link from "next/link";
import Image from "next/image";

export default function NavBarLeft() {

    const links = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Anime",
            href: "/anime",
        },
        {
            title: "Manga",
            href: "/manga",
        },
        {
            title: "News & Popular",
            href: "/news",
        },
        {
            title: "My Saves",
            href: "/saves",
        },
        {
            title: "Categories",
            href: "/browse",
        },
    ]

    return (
      <div className="flex h-20 justify-start items-center">
        <div className="relative h-20 w-32">
            <Link href="/"><Image src="/logo_transparent.png" alt="logo" layout="fill" objectFit="cover"/></Link>
        </div>
        {links.map(link => {
            return <Link className="font-normal px-2" href={link.href} key={link.title}>{link.title}</Link>
        })}
      </div>
    );
  }
  