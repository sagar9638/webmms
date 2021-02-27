
INSERT INTO [dbo].[MenuMaster]
           ([MRefId]
           ,[MTitle]
           ,[MName]
           ,[MPath]
           ,[MIcon]
           ,[Remark]
           ,[IsActive]
           ,[EntUser]
           ,[EntDate]
           )
     VALUES
           (
		@p_MRefId
           ,@p_MTitle
           ,@p_MName
           ,@p_MPath
           ,@p_MIcon
           ,@p_Remark
           ,@p_IsActive
           ,@p_EntUser
           ,GETDATE()
		   )

SELECT SCOPE_IDENTITY() AS USERID



