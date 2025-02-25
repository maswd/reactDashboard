import React from 'react';
import statusCards from '../assets/JsonData/status-card-data.json';
import Statuscard from '../components/status-card/StatusCard';
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom';
import Table from '../components/table/Table';
import Badge from '../components/badge/Badge';
import { useSelector } from 'react-redux';
import ThemeReducer from '../redux/reducer/ThemeReducer'

const chartOptions = {
    series: [{
        name: "Online",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
        name: "Store",
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51]
    }],
    option: {
        colors: ['#6ab04c', '#2980b9'],
        chart: {
            background: "transparent",
        },
        dataLabel: {
            enabled: false
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
const topCustomer = {
    head: [
        'user',
        'total orders',
        'total spending'
    ], body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}
const latestOrders = {
    head: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
   
       
    ]
}
const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}
const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
           <span>
              <Badge type={orderStatus[item.status]} content={item.status} />
           </span>
        </td>
    </tr>
)

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td >{item.username}</td>
        <td >{item.order}</td>
        <td >{item.price}</td>
    </tr>
)
const Dashboard = () => {
    const themeReducer=useSelector(state=>state.ThemeReducer.mode)
    return (
        <div>
            <h2 className="page-header">
                Dashboard
            </h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {statusCards.map((item, index) => (
                            <div className="col-6" key={index}>
                                <Statuscard
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer==='theme-mode-dark'?{
                                ...chartOptions.option,
                                theme:{mode:"dark"}
                            
                            }:{
                            ...chartOptions.option,
                            theme:{mode:"light"}
                            }}
                            series={chartOptions.series}
                            type="line"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            {/* table */}
                            <Table
                                headData={topCustomer.head}
                                renderHead={(item, index) => renderCustomerHead(item, index)}
                                bodyData={topCustomer.body}
                                renderBody={(item, index) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card ">
                        <div className="card__header">
                            <h3>lasted orders</h3>
                        </div>
                        <div className="card__body">
                            <Table 

                                headData={latestOrders.head}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
