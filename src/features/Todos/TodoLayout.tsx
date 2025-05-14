import { Outlet } from "react-router-dom";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useTranslation } from "react-i18next";

function TodoLayout() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 m-10">
      <div className="flex flex-col gap-10 border-2 border-black rounded-md font-[Tagesschrift] p-5">
        <div className="flex flex-row gap-2 items-center">
          <AssignmentTurnedInIcon />
          <h2 className="text-xl font-medium">{t("Todo Status")}</h2>
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">10</h3>
            <h3>Not Started</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">5</h3>
            <h3>In Progress</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">5</h3>
            <h3>Completed</h3>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default TodoLayout;
