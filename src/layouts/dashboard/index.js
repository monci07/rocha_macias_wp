/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

// images
import varilla from "assets/images/varilla.jpg";
import cemento from "assets/images/cemento.jpg";
import rack from "assets/images/Rack.jpg";
import caja_resma from "assets/images/Caja_resma.jpg";
import pilas from "assets/images/caja_pilas.jpg";
import clips from "assets/images/clips.jpg";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <h1>Ultimos productos</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultProjectCard
                  image={varilla}
                  label="Construcción"
                  title="varilla"
                  description="Emepezamos a manejar de 30 pies."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "Agrgar al carrito",
                  }}
                  authors={[]}
                  /*   { image: team1, name: "Elena Morison" },//   { image: team2, name: "Ryan Milly" },//   { image: team3, name: "Nick Daniel" },//   { image: team4, name: "Peterson" },*/
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultProjectCard
                  image={cemento}
                  label="Construcción"
                  title="Cemento Cemex"
                  description="Contamos con bolsas de 15 y 20 kilos."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "Agrgar al carrito",
                  }}
                  authors={[]}
                  /*   { image: team1, name: "Elena Morison" },//   { image: team2, name: "Ryan Milly" },//   { image: team3, name: "Nick Daniel" },//   { image: team4, name: "Peterson" },*/
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultProjectCard
                  image={rack}
                  label="Informatica"
                  title="Rack de procesadores"
                  description="Estos nuevos racks son de 10 pies y abarca hasta 30 pcs."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "Agrgar al carrito",
                  }}
                  authors={[]}
                  /*   { image: team1, name: "Elena Morison" },//   { image: team2, name: "Ryan Milly" },//   { image: team3, name: "Nick Daniel" },//   { image: team4, name: "Peterson" },*/
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <h1>Ultimos articulos para oficina</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultProjectCard
                  image={caja_resma}
                  label="Oficina"
                  title="Resma de hojas"
                  description="Manejamos cajas de 10, 15 y 20 paquetes."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "Agrgar al carrito",
                  }}
                  authors={[]}
                  /*   { image: team1, name: "Elena Morison" },//   { image: team2, name: "Ryan Milly" },//   { image: team3, name: "Nick Daniel" },//   { image: team4, name: "Peterson" },*/
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultProjectCard
                  image={pilas}
                  label="Oficina"
                  title="Paquete de pilas"
                  description="Paquetes de 30 pilas AA o AAA."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "Agrgar al carrito",
                  }}
                  authors={[]}
                  /*   { image: team1, name: "Elena Morison" },//   { image: team2, name: "Ryan Milly" },//   { image: team3, name: "Nick Daniel" },//   { image: team4, name: "Peterson" },*/
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultProjectCard
                  image={clips}
                  label="Oficina"
                  title="Clips"
                  description="Cajas de 20 unidades de clips."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "Agrgar al carrito",
                  }}
                  authors={[]}
                  /*   { image: team1, name: "Elena Morison" },//   { image: team2, name: "Ryan Milly" },//   { image: team3, name: "Nick Daniel" },//   { image: team4, name: "Peterson" },*/
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
