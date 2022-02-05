import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinicius Marinho</Text>
          <Text color="gray.300" fontSize="small">
            viniciusalexsander1@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vinicius Marinho"
        src="http://github.com/ViniciusAlexsander.png"
      />
    </Flex>
  );
}
