'use client';

import useSWR from "swr";
import Sidebar from "@app/components/sidebar/sidebar";
import { StatusProps } from "@app/lib/types";

const fetcher = (url: string ) => fetch(url).then((r) => r.json())

export default function Status({ params: { id } }: { params: { id: string } }) {
    const statusId = id;
    const { data, error, isLoading } = useSWR(`/api/status/${statusId}`, fetcher);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <>
            <Sidebar />

            <div className="flex flex-col items-center justify-center space-y-4 py-6">
                <h1>{data?.content}</h1>
            </div>
        </>
    )
}