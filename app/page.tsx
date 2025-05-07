import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";




export default function Home() {
  return (
   <>
   <Container>
      <Title text="Все пиццы" />
   </Container>
   <TopBar/>
   <Container>
    <div className="left">

    </div>
    <div className="right">

    </div>
   </Container>
   </>
  );
}
