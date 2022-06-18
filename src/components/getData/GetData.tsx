import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { getData } from "../../queries/auth";
import { TaskProps } from "../../types/interface";

const GetData = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTasks = async () => {
    setLoading(true);
    try {
      const data = await getData();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const columns: TableColumn<TaskProps>[] = [
    {
      name: "Id",
      selector: (row) => `${row.id}`,
      // sortable: true,
      // center: true,
      // style: {
      //   color: "#b9b9d0",
      //   fontSize: "1.2rem",
      // },
    },
    {
      name: "Title",
      selector: (row) => `${row.title}`,
      // sortable: true,
      // center: true,
      // style: {
      //   color: "#9494bb",
      //   fontSize: "1.2rem",
      // },
    },
      {
        name: "Actions",
        selector: (row: TaskProps) => `${row.body}`,
        // sortable: true,
        // center: true,
        // style: {
        //   color: "#9494bb",
        //   fontSize: "1.2rem",
        // },
      },
  ];

  const tableData = data  && data.map((item) => ({
    // id: item.id
  }));

  return (
    <div className="container">
      <div>
        <h3>List of Posts Generated</h3>
      </div>

      <div className="table">
        <div>
          {data ? (
            <div>
              <DataTable
                title="Search Results"
                columns={columns}
                data={tableData}
                pagination={true}
                paginationPerPage={9}
                paginationRowsPerPageOptions={[9, 16, 21, 26]}
                // defaultSortField="id"
                // width="100%"
              />
            </div>
          ) : (
            <div>
              <div>
                <i className="fas fa-ghost"></i>
              </div>
              <p>No user found! Please search for a user</p>
            </div>
          )}
        </div>
        <div>
          <button className="btn edit">Edit</button>
          <button className="btn delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export { GetData };
