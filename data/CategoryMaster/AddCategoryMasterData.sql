INSERT INTO [dbo].[CategoryMaster]
           ([CName]
           ,[CShortName]
           ,[CType]
           ,[CPageName]
           ,[CPageType]
           ,[CDetail]
           ,[CStatusFlag]
           ,[CConfirmFlag]
           ,[IsActive]
           ,[Ord]
           ,[Remark]
           ,[EntDate]
           ,[EntUser]
           )
     VALUES
           (
		    @p_CName
           ,@p_CShortName
           ,@p_CType
           ,@p_CPageName
           ,@p_CPageType
           ,@p_CDetail
           ,@p_CStatusFlag
           ,@p_CConfirmFlag
           ,@p_IsActive
           ,@p_Ord
           ,@p_Remark
           ,GETDATE()
           ,@p_EntUser
           )


