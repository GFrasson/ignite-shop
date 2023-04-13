import Image from 'next/image';
import { HomeContainer, Product } from "@/styles/pages/home";

import camiseta1 from '@/assets/1.png'
import camiseta2 from '@/assets/2.png'
import camiseta3 from '@/assets/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
