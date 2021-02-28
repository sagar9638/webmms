USE MMS
--SELECT *
--FROM INFORMATION_SCHEMA.COLUMNS
--WHERE TABLE_NAME = 'MenuMaster'

DECLARE @Col_Name nvarchar(120) ,@Data_Type nvarchar(120),@Length nvarchar(10);    

DECLARE db_cursor CURSOR FOR 
SELECT COLUMN_NAME,DATA_TYPE,CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = N'DesignationMaster'

OPEN db_cursor    
  
FETCH NEXT FROM db_cursor     
INTO @Col_Name,@Data_Type,@Length    
  
  
WHILE @@FETCH_STATUS = 0    
BEGIN    
   
    print  '.input(''p_'+@Col_Name+''', sql.'+
	CASE
    WHEN @Data_Type = 'int' THEN 'Int'
	WHEN @Data_Type = 'nvarchar' THEN 'NVarChar('+@Length+')'
	WHEN @Data_Type = 'date' THEN 'Date'
	WHEN @Data_Type = 'datetime' THEN 'Date'
	WHEN @Data_Type = 'varchar' THEN 'VarChar'
    END
	+', ReqData[0].'+@Col_Name+')'


	print 'p_' + @Col_Name + ' : ' 
	
FETCH NEXT FROM db_cursor     
INTO @Col_Name,@Data_Type,@Length    
   
END     
CLOSE db_cursor;    
DEALLOCATE db_cursor;
