import {
  createColumnHelper,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { PokemonBattleStats } from "~/lib/schemas/pokemon";

const columnHelper = createColumnHelper<PokemonBattleStats>();

export const columns = [
  columnHelper.accessor("name", {
    id: "name",
    header: "Name",
    footer: (props) => props.column.id,
    sortingFn: "alphanumeric",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("wins", {
    id: "wins",
    header: "Wins",
    footer: (props) => props.column.id,
    sortingFn: "basic",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("losses", {
    id: "losses",
    header: "Losses",
    footer: (props) => props.column.id,
    sortingFn: "basic",
    cell: (props) => props.getValue(),
  }),
  columnHelper.accessor("winLossRatio", {
    id: "winLossRatio",
    header: "W/L",
    footer: (props) => props.column.id,
    sortingFn: "basic",
    cell: (props) => props.getValue(),
  }),
];
