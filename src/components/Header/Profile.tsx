import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vinicius Marinho</Text>
        <Text color="gray.300" fontSize="small">
          viniciusalexsander1@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Vinicius Marinho"
        src="http://github.com/ViniciusAlexsander.png"
      />
    </Flex>
  );
}
