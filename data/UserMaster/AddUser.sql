
INSERT INTO [dbo].[UserMaster]
           ([RefId]
           ,[Name]
           ,[City]
           ,[DOB]
           ,[MobileNo]
           ,[EmailId]
           ,[EntUser]
           ,[EntDate]
           ,[UserName]
           ,[Password]
           ,[ConfirmFlag])
     VALUES
           (@RefId
           ,@Name
           ,@City
           ,@DOB 
           ,@MobileNo
           ,@EmailId
           ,@EntUser
           ,GETDATE()
           ,@UserName
           ,@Password
           ,'N');

SELECT SCOPE_IDENTITY() AS USERID
 



