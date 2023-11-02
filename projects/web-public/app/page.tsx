import { sum } from "@seixas/utils/math/sum";
import { Text } from "@seixas/design-system/components/Text";

export default function HomePage() {
  return (
    <>
      <Text tag="h1"> Home </Text>
      <Text tag="p">Importanto de @seixas/utils/math/sum  sum(2,7): {sum(2, 7)}</Text>
    </>
  )
}
