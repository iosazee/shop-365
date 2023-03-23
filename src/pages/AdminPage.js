import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'
import {  Card } from '@mui/material';
import AdminDashboard from './AdminDashboard';


const AdminPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const { user } = supabase.auth.getSession();
    if (!user || user.role !== "admin") {
      navigate("/admin/login");
    }
  }, [navigate]);


  return (
        <section>
            <Card>
                <AdminDashboard />
            </Card>
        </section>
  );
};

export default AdminPage;
