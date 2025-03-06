import { cn } from "@/lib/utils";
import { Container } from "./container";


interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return(
        <div className={cn('flex items-center justify-between py-8', className)}>
             <Container className='flex items-center justify-between py-8'>
                <div className='flex items-center gap-4'>

                </div>
            </Container>
        </div>
    )
}