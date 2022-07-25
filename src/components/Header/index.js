import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: transparent;
  position: absolute;
`;
const Icon = styled.div`
  padding: 10px;
  img {
    width: 40px;
  }
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  font-weight: bold;
  color: white;
  .btn {
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .content {
    display: none;
    position: absolute;
    z-index: 2;
  }

  .content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .content a:hover {
    //background-color: #ddd;
  }

  &:hover .content {
    display: block;
  }

  &:hover .dropbtn {
    //background-color: #3e8e41;
  }
`;

const Header = ({ data, getSelectedRegion }) => {
  return (
    <Wrapper>
      <Dropdown class="dropdown">
        <div class="btn">Regiões</div>
        <div class="content">
          {data.regions.map((region) => (
            <a href="#" onClick={() => getSelectedRegion(region)}>
              {region.name}
            </a>
          ))}
        </div>
      </Dropdown>
    </Wrapper>
  );
};

export default Header;
