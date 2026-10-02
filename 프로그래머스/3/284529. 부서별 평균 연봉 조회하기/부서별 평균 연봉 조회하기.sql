-- 코드를 작성해주세요

select HD.DEPT_ID, HD.DEPT_NAME_EN, round(AVG(HE.SAL)) as AVG_SAL
from HR_DEPARTMENT HD
join HR_EMPLOYEES HE
on HD.DEPT_ID = HE.DEPT_ID
group by DEPT_ID
order by 3 DESC