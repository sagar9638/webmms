
INSERT INTO [dbo].[DesignationMaster]
           (
	   		    [DName]
			   ,[DShortName]
			   ,[DAchiveCount]
			   ,[Remark]
			   ,[IsActive]
			   ,[EntUser]
			   ,[EntDate]
           )
     VALUES
           (
				@p_DName 
			   ,@p_DShortName
			   ,@p_DAchiveCount
			   ,@p_Remark
			   ,@p_IsActive
			   ,@p_EntUser
			   ,GETDATE()
           )

SELECT SCOPE_IDENTITY() AS DId



