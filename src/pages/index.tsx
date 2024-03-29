import Base from "@/components/common/base";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import List from "@/components/home-page/list";
import TagList from "@/components/home-page/tag-list";

export default function Home() {
  return (
    <Base>
      <Header />
      <TagList />
      <List
        label={'Popular'}
      />
      <Footer />
    </Base>
  )
}
