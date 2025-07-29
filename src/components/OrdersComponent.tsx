"use client";

import { useState } from "react";
import { MY_ORDERS_QUERYResult } from "../../sanity.types";
import { TableBody, TableCell, TableRow } from "./ui/table";
import PriceFormatter from "./PriceFormatter";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import OrderDetailsDialog from "./OrderDetailsDialog";

export default function OrdersComponent({ orders }: { orders: MY_ORDERS_QUERYResult }) {
    const [selectedOrder, setSelectedOrder] = useState<MY_ORDERS_QUERYResult[number] | null>(null);

    const handleOrderClick = (order: MY_ORDERS_QUERYResult[number]) => {
        setSelectedOrder(order);
    };

    return (
        <>
            <TableBody>
                {orders.map((order) => (
                    <Tooltip key={order?.orderNumber}>
                        <TooltipTrigger asChild>
                            <TableRow onClick={() => handleOrderClick(order)} className="cursor-pointer hover:bg-gray-100 h-12">
                                <TableCell className="font-medium">
                                    {order.orderNumber?.slice(-10) ?? "N/A"}...
                                </TableCell>

                                <TableCell className="hidden md:table-cell">
                                    {order?.orderDate && new Date(order.orderDate).toLocaleDateString()}
                                </TableCell>

                                <TableCell>{order.customerName}</TableCell>

                                <TableCell className="hidden sm:table-cell">
                                    {order.email}
                                </TableCell>

                                <TableCell>
                                    <PriceFormatter amount={order?.totalPrice} className="text-black font-medium" />
                                </TableCell>

                                <TableCell>
                                    {order?.status && (
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${order.status === "paid"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                            }`}
                                        >
                                            {order?.status.charAt(0).toUpperCase() + order?.status.slice(1)}
                                        </span>
                                    )}
                                </TableCell>
                            </TableRow>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Click to see order details</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </TableBody>

            <OrderDetailsDialog order={selectedOrder} isOpen={!!selectedOrder} onClose={() => setSelectedOrder(null)} />
        </>
    );
}