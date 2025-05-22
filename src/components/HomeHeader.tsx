import defaulUserPhotoImg from "@assets/userPhotoDefault.png";
import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import useAuth from "@hooks/useAuth";
import api from "@services/api";
import { LogOut } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaulUserPhotoImg
        }
        w="$16"
        h="$16"
        alt="Imagem do usuário"
      />

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá
        </Text>
        <Heading color="$gray100" fontSize="$md">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={LogOut} color="$gray200" size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
