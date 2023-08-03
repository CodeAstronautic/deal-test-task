import React, { useEffect } from 'react';
import style from './style.css';
import { MainHeader } from '../Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchApiSingleData } from 'app/actions';
import StoreIcon from "../../../assets/images/storeIcon.png";
import leftArrow from "../../../assets/images/storeIcon.png";

export const DealData = () => {
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const {payload} = useSelector((d: any) => d?.singleDealData);
  useEffect(() => {
    if (id) {
      dispatch(fetchApiSingleData(id));
    }
  }, []);
  return (
    <>
      <MainHeader />
      <div className={style.listWarpper}>
        <div className={style.listBox}>
          <a href="/dataitem" className={style.backToPage}>
            <img src={leftArrow} alt="image" /> Back to Deals List
          </a>
           <div className={style.listItems}>
            <img src={payload?.dealData?.image}alt="image" />
            <div className={style.listContent}>
              <h2>{payload?.dealData?.store_title}</h2>
              <h3>
                <img src={StoreIcon} alt="storeIcon" />
                {payload?.dealData?.title}
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};
