import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteData, getData } from "../queries/auth";

interface TaskProps {
  id: number;
  title: string;
  body: string;
}

const GetData = (): JSX.Element => {
  const [task, setTask] = useState([]);

  const getTasks = async () => {
    try {
      const data = await getData();
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onDelete = async (id: number) => {
    try {
      await deleteData(id);
      setTask(task.filter((x: any) => x.id !== id));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Sorry, an error occured. Try again later!");
    }
  };

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#0f4a7b",
        color: "#fff",
        boxShadow: "0px 4px 10px rgb(62 62 64 / 10%)",
        borderRadius: "5px",
        fontSize: "1rem",
        fontWeight: "700",
      },
    },
    rows: {
      style: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: " 0px 4px 10px rgb(62 62 64 / 3%)",
        margin: " 0.5rem 0",
      },
    },
    tableRow: {
      styles: {
        padding: "0.9rem 1.2rem",
      },
    },
  };

  const columns: any = [
    {
      name: "ID",
      selector: (row: { id: number }) => `${row.id}`,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row: { title: string }) => `${row.title}`,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row: any) => `${row.body}`,
      cell: (row: any) => {
        const id = row.id;
        return (
          <>
            <div>
              <Link to={`/edit/${id}`}>
                <button className="btn edit">Edit</button>
              </Link>
              <button className="btn delete" onClick={() => onDelete(row.id)}>
                Delete
              </button>
            </div>
          </>
        );
      },
    },
  ];

  const tableData =
    task &&
    task.map((item: TaskProps) => ({
      id: item.id,
      title: item.title,
    }));

  return (
    <div className="container">
      <div>
        <h3>List of Posts Generated</h3>
      </div>

      <div className="table">
        <div>
          <div>
            <DataTable
              columns={columns}
              data={tableData}
              pagination={true}
              paginationPerPage={9}
              paginationRowsPerPageOptions={[10, 20, 30, 40]}
              customStyles={customStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { GetData };
