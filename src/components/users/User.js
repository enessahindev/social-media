import { Button, Code, VStack } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { PROTECTED } from "lib/routes";
import React from "react";
import { Link } from "react-router-dom";

export default function User({ user }) {
  const { id, username } = user;
  return (
    <VStack
      bg="gray.100"
      shadow="sm"
      rounded="md"
      textAlign="center"
      p="4"
      spacing="3"
    >
      <Avatar user={user} />
      <Code>@{username}</Code>
      <Link>
        <Button
          as={Link}
          to={`${PROTECTED}/profile/${id}`}
          size="sm"
          variant="link"
          colorScheme="messenger"
        >
          View Profile
        </Button>
      </Link>
    </VStack>
  );
}