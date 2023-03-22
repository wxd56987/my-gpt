import Base from "@/components/common/base";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Generate from "@/components/ai/generate";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  return (
    <Base>
      <Header/>
      <Generate/>
      <Footer/>
    </Base>
  )
}
