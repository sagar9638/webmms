
INSERT INTO [dbo].[MenuRights]
           ([UserId]
           ,[DId]
           ,[MId]
           ,[PId]
           ,[Ord]
           ,[Remark]
           ,[EntUser]
           ,[EntDate]
           )
     VALUES
           (
			@p_UserId
			,@p_DId
			,@p_MId
                  ,@p_PId
			,@p_Ord
			,@p_Remark
			,@p_EntUser
			,GETDATE()
		   )

SELECT SCOPE_IDENTITY() AS Id


