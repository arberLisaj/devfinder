import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/hooks/useFetchUser";
import { Link } from "react-router-dom";

interface Props {
  users?: User[];
}
const UserTable = ({ users }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">avatar / profile</TableHead>
          <TableHead className="text-center">username</TableHead>
          <TableHead>github description</TableHead>
          <TableHead>repos</TableHead>
          <TableHead>followers</TableHead>
          <TableHead>following</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((u, index) => (
          <TableRow key={index}>
            <TableCell className="flex justify-center">
              <Link target="_blank" to={u.html_url}>
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={u?.avatar_url}
                  alt="avatar"
                />
              </Link>
            </TableCell>
            <TableCell className="text-center">{u.login}</TableCell>
            <TableCell>{u.bio}</TableCell>
            <TableCell className="text-center">{u.public_repos}</TableCell>
            <TableCell className="text-center">{u.followers}</TableCell>
            <TableCell className="text-center">{u.following}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
