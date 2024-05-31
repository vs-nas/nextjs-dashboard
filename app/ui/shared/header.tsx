'use client'
import Link from "next/link"
import {
    CircleUser,
    Menu,
    Package2,
    Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { CubeTransparentIcon } from "@heroicons/react/24/outline"


export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <header className="sticky z-[5] top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <CubeTransparentIcon className="h-8 w-12" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href="/dashboard"
                        className={clsx(
                            'transition-colors hover:text-foreground',
                            {
                                'text-foreground': pathname === '/dashboard',
                                'text-muted-foreground': pathname != '/dashboard'
                            },
                        )}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/orders"
                        className={clsx(
                            'transition-colors hover:text-foreground',
                            {
                                'text-foreground': pathname === '/orders',
                                'text-muted-foreground': pathname != '/orders'
                            },
                        )}
                    >
                        Orders
                    </Link>
                    <Link
                        href="#"
                        className={clsx(
                            'transition-colors hover:text-foreground',
                            {
                                'text-foreground': pathname === '/products',
                                'text-muted-foreground': pathname != '/products'
                            },
                        )}
                    >
                        Products
                    </Link>
                    <Link
                        href="#"
                        className={clsx(
                            'transition-colors hover:text-foreground',
                            {
                                'text-foreground': pathname === '/customers',
                                'text-muted-foreground': pathname != '/customers'
                            },
                        )}
                    >
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className={clsx(
                            'transition-colors hover:text-foreground',
                            {
                                'text-foreground': pathname === '/analytics',
                                'text-muted-foreground': pathname != '/analytics'
                            },
                        )}
                    >
                        Analytics
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <CubeTransparentIcon className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <Link href="/dashboard" className="hover:text-foreground">
                                Dashboard
                            </Link>
                            <Link
                                href="/orders"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Orders
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Customers
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Analytics
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    href="/login"
                                    className="w-full"
                                >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </>
    );
}
