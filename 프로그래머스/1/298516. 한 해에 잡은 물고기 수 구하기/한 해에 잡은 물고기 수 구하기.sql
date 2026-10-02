-- 코드를 작성해주세요

select count(*) as FISH_COUNT
from FISH_INFO
where YEAR(TIME) = 2021
group by YEAR(TIME)
