import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { compareDate, toNormalTime } from '../helper';
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

import '../styles/OrderStatusUser.css';

const OrderStatusUser = (props) => {
  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();
  const { login } = bindActionCreators(actionCreators, dispatch);

  const handleCancelOrder = (order) => {
    axios
      .put(`http://localhost:8080/api/users/${order.userID}/cancelOrder`, {
        _id: order._id,
      })
      .then((res) => {
        axios.get('http://localhost:8080/api/users').then((res) => {
          let resData = res.data;
          delete resData.password;
          delete resData.__v;
          login(resData);
        });
      });
  };
  return (
    <div className='orderStatusUser'>
      {currentUser.orders
        ?.filter((order) => order.status === props.status)
        ?.sort(compareDate)
        ?.map((order) => (
          <div key={order._id} className='orderStatusUser__order'>
            <div className='orderStatusUser__statusControl'>
              <p>
                <span class='orderStatusUser__label'>Status:</span>{' '}
                {order.status}
              </p>
              {order.status === 'Pending' && (
                <button
                  className='button normal-button'
                  onClick={() => handleCancelOrder(order)}
                >
                  Cancel
                </button>
              )}
            </div>
            <p>
              <span class='orderStatusUser__label'>Date:</span>{' '}
              {toNormalTime(order.date)}
            </p>
            <p className='orderStatusUser__address'>
              <span className='orderStatusUser__addressLabel orderStatusUser__label'>
                Address:
              </span>
              <span>{order.address}</span>
            </p>
            <p>
              <span className='orderStatusUser__label'>Orders:</span>
            </p>
            {order.items?.map((item) => (
              <p key={item.name} className='orderStatusUser__orderName '>
                {item.name} ₱{item.price} x {item.count} = ₱
                {item.price * item.count}
              </p>
            ))}
            <p>
              <span class='orderStatusUser__label'>Total:</span> ₱
              {order.items
                ?.map((item) => item.price * item.count)
                .reduce((prev, current) => {
                  return prev + current;
                }, 0)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default OrderStatusUser;
