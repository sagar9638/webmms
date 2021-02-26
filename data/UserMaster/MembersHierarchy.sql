select 
	--  CAST(DENSE_RANK() OVER ( ORDER BY a.perentId) AS int) pid
	(CASE WHEN CHARINDEX('.', a.perentId, 1)=0 THEN a.perentId ELSE RIGHT(a.perentId, CHARINDEX('.', REVERSE(a.perentId)) - 1) END) as pid
      ,a.Id as id
      ,a.RefId
      ,a.perentId
      ,a.Name as name
      ,a.City as title
      ,CONVERT(varchar,a.DOB,105) as Dob
      ,a.MobileNo
      ,a.EmailId as email
      ,a.EntUser
      ,CONVERT(varchar,a.EntDate,105) as EntDate
      ,a.UserName
      ,'https://cdn.balkan.app/shared/1.jpg' as img
      ,a.ConfirmFlag
      ,a.ConfirmUser
      ,a.ConfirmDate
from (
		select  *
				,LEFT(RefId, LEN(RefId) - CHARINDEX('.', REVERSE(RefId))) perentId  
		from	UserMaster Where RefId like @p_Condition And ConfirmFlag = 'Y'
	 ) a 
