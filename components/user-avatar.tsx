import { User } from "@prisma/client"
import { AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"
import Link from "next/link"

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">
  href?: string
  clickable?: boolean
}

export function UserAvatar({ user, href, clickable = false, ...props }: UserAvatarProps) {
  const avatarContent = (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )

  return href ? (
    <Link href={href} passHref>
      <span className="p-0 border-none bg-transparent cursor-pointer">{avatarContent}</span>
    </Link>
  ) : (
    avatarContent
  )
}

