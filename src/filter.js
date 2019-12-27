import React from 'react';
import FilterResults from 'react-filter-search';
import Select from 'rc-select';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';


class ArrayFiler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fvalue: '',
            dlen:''
        };
        this.filterList = this.filterList.bind(this);
        this.fetchdata = this.fetchdata.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
    }

    componentDidMount() {
        this.fetchdata();
    }
    fetchdata() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                 var dlen=data.length;
                this.setState({
                    data: data,
                    dlen:dlen

                })
            })
            .catch(error => {
                console.error(error);
            });
    }
    filterList(e) {
        // Search User By Text Value Pass As Parameter In Redux Action Method.
        var searchname = e.target.value;

        this.setState({
            fvalue: searchname
        })

    }
    onShowSizeChange(current, pageSize){       
        alert(current);
        alert(pageSize);
    }
    onChangePage(current, pageSize){
        alert(current);
        alert(pageSize);
    }
    render() {
        const { data, fvalue } = this.state;
        //alert(JSON.stringify(this.state.data));
        return (
            <div>
                <h3>Filter</h3>
                <input type="text" className="form-control col-sm-2" placeholder="Search" style={{ paddingLeft: '10px', borderRadius: '10px 10px 10px 10px', float: 'right', marginRight: '10px', marginBottom: '5px' }} name="fvalue" onChange={this.filterList} value={fvalue} />

                <FilterResults
                    value={fvalue}
                    data={data}
                    renderResults={results => (
                        <table class="table table-bordered">
                            <tr>
                                <th>Title</th>
                                <th>body</th>
                            </tr>
                            {results.map(el => (
                                <tr>
                                    <td>{el.title}</td>
                                    <td>{el.body}</td>
                                </tr>
                            ))}
                        </table>
                    )}
                />
                <Pagination
                    style={{ float: 'right' }}
                    selectComponentClass={Select}
                    showQuickJumper
                    showSizeChanger
                    defaultPageSize={20}
                    defaultCurrent={5}
                    onShowSizeChange={this.onShowSizeChange}
                    onChange={this.onChangePage}
                    total={this.state.dlen}
                    locale={localeInfo}
                />
            </div>
        );
    }
}
export default ArrayFiler;