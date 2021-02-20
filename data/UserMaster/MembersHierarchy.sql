select 
	  DENSE_RANK() OVER ( ORDER BY a.perentId) pid
	  ,a.Id
      ,a.RefId
      ,a.Name
      ,a.City
      ,a.DOB
      ,a.MobileNo
      ,a.EmailId
      ,a.EntUser
      ,a.EntDate
      ,a.UserName
from (
		select  *
				,LEFT(RefId, LEN(RefId) - CHARINDEX('.', REVERSE(RefId))) perentId  
		from	UserMaster
	 ) a
Where @p_Condition