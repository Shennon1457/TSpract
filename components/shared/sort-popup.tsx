import { cn } from "@/lib/utils";
import Image from 'next/image';

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return(
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
                <div className='flex items-center gap-4'>
                     <Image src="/logo.png" width={35} height={35} alt='лого' />
                     <b>Сортировка: </b>
                     <b className="text-primary">Рейтингу</b>
                </div>

        </div>
    )
}