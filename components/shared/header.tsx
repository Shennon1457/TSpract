import * as React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex items-center gap-4'>
                    <Image src="/logo.png" width={35} height={35} alt='лого' />
                    <p className='font-bold'>NEXT PIZZA <p className='font-normal'>Вкусней уже некуда</p></p>
                    
                </div>

                <div className='flex items-center'>
                <input
                        id="inp"
                        name="Поиск"
                        type="text"
                        placeholder="Поиск"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
                </div>
                <div className='flex items-center gap-4'>
                    <button className='flex items-center'>
                        <Image src="/logo.png" width={35} height={35} alt='лого' />
                        <p>Войти</p>
                    </button>
                    <button>
                        <Image src="/logo.png" width={35} height={35} alt='лого' />
                    </button>
                </div>
            </Container>
        </header>
    );
};