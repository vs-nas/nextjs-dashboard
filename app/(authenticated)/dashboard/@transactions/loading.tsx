import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Link from "next/link"
import {
    ArrowUpRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function TransactionsLoading() {
    return (
        <>


            <Card
                className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>
                            Recent transactions from your store.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="#">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden xl:table-column">
                                    Type
                                </TableHead>
                                <TableHead className="hidden xl:table-column">
                                    Status
                                </TableHead>
                                <TableHead className="hidden xl:table-column">
                                    Date
                                </TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">
                                        <Skeleton className="h-4 my-2 w-[150px] rounded" />
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        <Skeleton className="h-4 w-[150px] rounded" />
                                    </div>
                                </TableCell>
                                <TableCell className="hidden xl:table-column">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                                <TableCell className="hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                        <Skeleton className="h-4 w-[150px] rounded" />
                                    </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">
                                        <Skeleton className="h-4 my-2 w-[150px] rounded" />
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        <Skeleton className="h-4 w-[150px] rounded" />
                                    </div>
                                </TableCell>
                                <TableCell className="hidden xl:table-column">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                                <TableCell className="hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                        <Skeleton className="h-4 w-[150px] rounded" />
                                    </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">
                                        <Skeleton className="h-4 my-2 w-[150px] rounded" />
                                    </div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        <Skeleton className="h-4 w-[150px] rounded" />
                                    </div>
                                </TableCell>
                                <TableCell className="hidden xl:table-column">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                                <TableCell className="hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                        <Skeleton className="h-4 w-[150px] rounded" />
                                    </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                                <TableCell className="text-right">
                                    <Skeleton className="h-4 w-[150px] rounded" />
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </>
    )
}