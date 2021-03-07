DECLARE @DId NVARCHAR(50),@PERENTID NVARCHAR(50),@ConnectUserCount INT, @ADId NVARCHAR(50)

SELECT @DId = DId FROM	DesignationMaster
WHERE DFix = 'NewUser';

INSERT INTO [dbo].[UserMaster]
           (
            [RefId]
           ,[Name]
           ,[City]
           ,[DOB]
           ,[MobileNo]
           ,[EmailId]
           ,[EntUser]
           ,[EntDate]
           ,[UserName]
           ,[Password]
           ,[ConfirmFlag]
           ,[DId]
           ,[ConnectUserCount]
           )
     VALUES
           (
            @RefId
           ,@Name
           ,@City
           ,@DOB 
           ,@MobileNo
           ,@EmailId
           ,@EntUser
           ,GETDATE()
           ,@UserName
           ,@Password
           ,'N'
           ,@DId
           ,0
           );

SELECT SCOPE_IDENTITY() AS USERID
