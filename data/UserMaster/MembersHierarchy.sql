select 
	  DENSE_RANK() OVER ( ORDER BY a.perentId) pid
	  ,a.Id as id
      ,a.RefId
      ,a.Name as name
      ,a.City as title
      ,CONVERT(varchar,a.DOB,105) as Dob
      ,a.MobileNo
      ,a.EmailId as email
      ,a.EntUser
      ,CONVERT(varchar,a.EntDate,105) as EntDate
      ,a.UserName
      ,'https://cdn.balkan.app/shared/1.jpg' as img
from (
		select  *
				,LEFT(RefId, LEN(RefId) - CHARINDEX('.', REVERSE(RefId))) perentId  
		from	UserMaster --Where @p_Condition
	 ) a 
