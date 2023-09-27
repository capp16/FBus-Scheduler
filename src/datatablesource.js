import busData from "./utils/db.json"
export const userColumns = [
  { field: "id", headerName: "ID",sortable:false },
  { field: "bus_no", headerName: "Bus No.",sortable:false },
  {
    field: "driverName",
    headerName: "Driver Name",
    sortable:false
  },
  {
    field: "depart_from",
    headerName: "Depart From",
    sortable:false
  },
  {
    field: "going_to",
    headerName: "Going to",
    sortable:false
  },

  {
    field: "no_of_seats",
    headerName: "Total Seats",
  },
  {
    field: "live_status",
    headerName: "Live Status",
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.live_status.isrunning}`}>
          {params.row.live_status.isrunning =='active' ? 'Running' : 'Not running'}
        </div>
      );
    },
    sortable:false
  },
];

//temporary data
export const userRows = busData.busList