import Menu from "../../components/Menu";
import Search from "../../components/Search";

function Header() {
  return (
    <div className="grid wide">
      <div className="row">
        {/* Search */}
        <div className="col l-6">
          <Search />
        </div>

        {/* Menu */}
        <div className="col l-6">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Header;
