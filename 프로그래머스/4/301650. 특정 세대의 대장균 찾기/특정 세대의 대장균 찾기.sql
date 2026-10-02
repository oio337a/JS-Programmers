-- 코드를 작성해주세요

select ED3.ID
from ECOLI_DATA ED1
join ECOLI_DATA ED2
on ED1.ID = ED2.PARENT_ID and ED1.PARENT_ID is null
join ECOLI_DATA ED3
on ED2.ID = ED3.PARENT_ID
order by 1