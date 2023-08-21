import {useState,useEffect} from 'react';
import Post from './Model';
import fetchPosts from './FetchData';
import { GridColDef,DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function DataTable() {
    const [posts,setPosts] = useState<Post[]>([]);

    useEffect(() => {
      const getData = async () => {
        const data = await fetchPosts();
        setPosts(data);
      };
  
      getData();
      }, []);

    const columns: GridColDef[]=[
        {field:"id",headerName:"ID",width:70},
        {field:"title",headerName:"Title",width:300},
        {field:"body",headerName:"Body",width:600}
    ]
  return (
    <Box sx={{height:400,width:"100%"}}>
        <DataGrid rows={posts} columns={columns} pageSize={5} />
    </Box>
  )
}
