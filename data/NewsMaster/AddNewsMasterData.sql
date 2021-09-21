
INSERT INTO [dbo].[NewsMaster]
           (
		[Title]
           ,[SubTitle]
           ,[Image]
           ,[Description]
           ,[ShortDescription]
           ,[Category]
           ,[NewsType]
           ,[Ord]
           ,[IsActive]
           ,[EntDate]
           ,[EntUser]
           )
     VALUES
           (
		@p_Title
           ,@p_SubTitle
           ,@p_Image
           ,@p_Description
           ,@p_ShortDescription
           ,@p_Category
           ,@p_NewsType
           ,@p_Ord
           ,@p_IsActive
           ,GETDATE()
           ,@p_EntUser
           )

SELECT SCOPE_IDENTITY() AS NID


